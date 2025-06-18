from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing import image
import io
from PIL import Image
from flask_cors import CORS  # Add this for CORS handling

app = Flask(__name__)
CORS(app)  # Enable CORS to allow your React frontend to make requests

# Load the model once when the app starts
model = tf.keras.models.load_model('final1.keras')

# import json
# with open("class_names.json", "r") as f:
#     class_names = json.load(f)


class_names = ['Acne and Rosacea', 'Atopic Dermatitis', 'Hair Loss Photos Alopecia and other Hair Diseases', 'Light Diseases and Disorders of Pigmentation', 'NORMAL', 'Poison Ivy Photos and other Contact Dermatitis']

IMG_HEIGHT = 180
IMG_WIDTH = 180

def preprocess_image(img_bytes):
    img = Image.open(io.BytesIO(img_bytes)).convert('RGB')
    img = img.resize((IMG_WIDTH, IMG_HEIGHT))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  
    # img_array = img_array / 255.0  
    return img_array

@app.route('/', methods=['GET'])
def home():
    return "Flask server is running!"

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part in the request'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    try:
        img_bytes = file.read()
        img_array = preprocess_image(img_bytes)
        
        predictions = model.predict(img_array)
        score = tf.nn.softmax(predictions[0])
        predicted_index = np.argmax(score)
        predicted_class = class_names[predicted_index]
        confidence = float(100 * np.max(score))
        
        return jsonify({
            'predicted_class': predicted_class,
            'confidence': confidence
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
