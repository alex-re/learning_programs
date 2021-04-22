# source hackernoon.com

import json
import hashlib
from time import time
from flask import Flask, jsonify, request # little django :)
from uuid import uuid4
import sys

class Blockchain():
    def __init__(self):
        self.chain = []
        self.current_trxs = []
        self.new_block(previous_hash = 1, proof=100)

    def new_block(self, proof, previous_hash = None):
        block = {
            'index': len(self.chain) + 1,
            'timestamp': time(),
            'trxs': self.current_trxs,
            'proof': proof,
            'previous_hash': previous_hash or self.hash(self.chain[-1]),
        }
        self.current_trxs = []
        self.chain.append(block)
        return block

    def new_trx(self, sender, recipient, amount):
        self.current_trxs.append({'sender': sender, 'recipient': recipient, 'amount': amount})
        return self.last_block['index'] + 1

    @staticmethod # just can be use in this page NOT as a future
    def hash(block):
        block_string = json.dumps(block, sort_keys=True).encode()
        return hashlib.sha256(block_string).hexdigest()

    @property # last_block will be like variable with its `reture` value
   def last_block(self):
        return self.chain[-1]

    @staticmethod
    def valid_proof(last_proof, proof):
        this_proof = f'{proof}{last_proof}'.encode()
        this_proof_hash = hashlib.sha256(this_proof).hexdigest()
        return this_proof_hash[:4] == '0000'

    def proof_of_work(self, last_proof):
        proof = 0
        while self.valid_proof(last_proof, proof) is False:
            proof += 1
            return proof

app = Flask(__name__)

node_id = str(uuid4)

blockchain = Blockchain()

@app.route('/mine', methods=['GET'])
def mine():
    last_block = blockchain.last_block
    last_proof = last_block['proof']
    proof = blockchain.proof_of_work(last_proof)

    blockchain.new_trx(sender="0", recipient=node_id, amount=50)

    previous_hash = blockchain.hash(last_block)
    block = blockchain.new_block(proof, previous_hash)

    res = {
        'message': 'new block created'
        'index': block['index']
        'trxs': block['trxs']
        'proof': block['proof']
    }


@app.route('/trxs/new', methods=['POST'])
def new_trx():
    values = request.get_json()
    this_block = blockchain.new_trx(values['sender'], values['recipient'], values['amount'])
    res = f'will be added to block {this_block}'
    return jsonify(res), 201 # 201 means DONE!

@app.route('/chain')
def full_chain():
    res = {
        'chain': blockchain.chain,
        'length': len(blockchain.chain)
    }
    return jsonify(res), 200

if __name__ == '__main__': # if run in command-line
    app.run(host='0.0.0.0', port=sys.argv[1])