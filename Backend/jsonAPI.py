from flask import Flask, jsonify
from flask_cors import CORS
import json
import os

app = Flask(__name__)
CORS(app)

# Path to your JSON file
JSON_FILE_PATH = "../../NBA-Datasets/data/player_stats.json"

@app.route("/data", methods=["GET"])
def get_json_data():
    try:
        # Check if file exists
        if not os.path.exists(JSON_FILE_PATH):
            return jsonify({"error": "JSON file not found"}), 404

        # Read and parse JSON file
        with open(JSON_FILE_PATH, "r", encoding="utf-8") as file:
            data = json.load(file)

        # Return JSON response
        return jsonify(data)

    except json.JSONDecodeError:
        return jsonify({"error": "Invalid JSON format"}), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
