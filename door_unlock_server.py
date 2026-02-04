#!/usr/bin/env python3
"""
Door Unlock API Server
Simple Flask server to expose door unlock functionality via HTTP.
Run this on the Raspberry Pi to enable remote unlock from the web dashboard.
"""
from flask import Flask, jsonify, make_response
import logging
import os

# Setup logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s [%(levelname)s] %(message)s',
    datefmt='%H:%M:%S'
)

app = Flask(__name__)

# Try to use flask-cors if available, otherwise manual CORS
try:
    from flask_cors import CORS
    CORS(app)
    logging.info("Using flask-cors for CORS")
except ImportError:
    logging.info("flask-cors not installed, using manual CORS headers")
    
    @app.after_request
    def add_cors_headers(response):
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type'
        return response

# Import door unlock function
try:
    from door_unlock import unlock_door
    DOOR_AVAILABLE = True
except ImportError:
    logging.warning("door_unlock module not available - running in mock mode")
    DOOR_AVAILABLE = False
    def unlock_door(duration=3):
        logging.info(f"MOCK: Would unlock door for {duration}s")
        return True

@app.route('/api/door/unlock', methods=['POST', 'GET'])
def api_unlock():
    """
    Trigger door unlock for 3 seconds.
    Returns JSON with success status.
    """
    logging.info("API: Door unlock requested")
    
    try:
        success = unlock_door()
        if success:
            return jsonify({
                'success': True,
                'message': 'Door unlocked for 3 seconds'
            })
        else:
            return jsonify({
                'success': False,
                'message': 'Door unlock failed'
            }), 500
    except Exception as e:
        logging.error(f"API Error: {e}")
        return jsonify({
            'success': False,
            'message': str(e)
        }), 500

@app.route('/api/door/status', methods=['GET'])
def api_status():
    """Health check endpoint"""
    return jsonify({
        'status': 'online',
        'door_available': DOOR_AVAILABLE
    })

@app.route('/')
def index():
    return jsonify({
        'service': 'Door Unlock API',
        'endpoints': {
            '/api/door/unlock': 'POST/GET - Trigger 3-second unlock',
            '/api/door/status': 'GET - Check service status'
        }
    })

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5050))
    logging.info(f"Starting Door Unlock API on port {port}")
    app.run(host='0.0.0.0', port=port, debug=False)
