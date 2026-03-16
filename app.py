from flask import Flask

from backend.routes import routes

def createApp() :
  app = Flask(__name__, template_folder='frontend', static_folder='frontend', static_url_path='/static')
  app.register_blueprint(routes)
  return app
app = createApp()

import backend.routes


if (__name__ == '__main__') :
     app.run(debug = 'True' , port=50001)