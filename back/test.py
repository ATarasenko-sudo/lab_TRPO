import re
from flask import Flask, request

app = Flask(__name__)


from flask import Flask, request
# ...
@app.route('/apitest', methods=['POST'])
def process_json():
    content_type = request.headers.get('Content-Type')
    print(content_type)
    if (request.method == 'POST'):
        json = request.json
        return json
    else:
        return 'Content-Type not supported!'
if __name__ == '__main__':
    # run app in debug mode on port 5000
    app.run(debug=True, port=5001)