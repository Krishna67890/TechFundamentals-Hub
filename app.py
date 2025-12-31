from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/basics')
def basics():
    return render_template('basics.html')

@app.route('/mysql')
def mysql():
    return render_template('mysql.html')

@app.route('/mssql')
def mssql():
    return render_template('mssql.html')

@app.route('/postgresql')
def postgresql():
    return render_template('postgresql.html')

@app.route('/advanced')
def advanced():
    return render_template('advanced.html')

if __name__ == '__main__':
    app.run(debug=True)