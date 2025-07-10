from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib

app = Flask(__name__)
CORS(app)

# Load model and vectorizer
try:
    model = joblib.load("model/fake_news_model.pkl")
    vectorizer = joblib.load("model/vectorizer.pkl")
except Exception as e:
    print("Error loading model or vectorizer:", e)
    model = None
    vectorizer = None

@app.route("/", methods=["GET"])
def health_check():
    return "✅ ML API is alive!"

@app.route("/predict", methods=["POST"])
def predict():
    if not model or not vectorizer:
        return jsonify({"error": "Model or vectorizer not loaded"}), 500

    data = request.get_json()
    content = data.get("content", "")

    if not content:
        return jsonify({"error": "No content provided"}), 400

    vect_input = vectorizer.transform([content])
    prediction = model.predict(vect_input)[0]
    result = "FAKE" if int(prediction) == 1 else "REAL"

    return jsonify({"result": result})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
