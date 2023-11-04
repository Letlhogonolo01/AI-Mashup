from flask import Flask, request, jsonify
import pyodbc
import bleach  # for input validation

app = Flask(__name__)

# Define your Azure SQL Database credentials
server = 'connecwiseai.database.windows.net'
database = 'ConnectWise'
username = 'connectwiseai'
password = 'Khabo@2015'  # Replace with your actual password
driver = '{ODBC Driver 17 for SQL Server}'

# Create a connection string
conn_str = f'DRIVER={driver};SERVER={server};DATABASE={database};UID={username};PWD={password}'

# Implement connection pooling
connection_pool = pyodbc.pooling.SimpleConnectionPool(minconn=1, maxconn=10, connection_string=conn_str)

# Function to insert user data during registration
@app.route('/api/register', methods=['POST'])
def register_user():
    data = request.get_json()
    username = bleach.clean(data.get('username'))
    email = bleach.clean(data.get('email'))
    password = bleach.clean(data.get('password'))

    try:
        # Get a connection from the pool
        connection = connection_pool.getconn()
        cursor = connection.cursor()

        # Insert user data into the Users table
        cursor.execute('INSERT INTO Users (Username, Email, PasswordHash, RegistrationDate) VALUES (?, ?, ?, GETDATE())',
                       username, email, password)

        connection.commit()
    except pyodbc.Error as ex:
        return jsonify({'error': 'Error registering user'}), 500  # 500 Internal Server Error
    finally:
        if connection:
            connection_pool.putconn(connection)

    return jsonify({'message': 'User registered successfully'}), 201  # 201 Created

# Function to retrieve job listings
@app.route('/api/job_listings', methods=['GET'])
def get_job_listings():
    try:
        # Get a connection from the pool
        connection = connection_pool.getconn()
        cursor = connection.cursor()

        # Retrieve job listings from the JobListings table
        cursor.execute('SELECT JobID, Title, Description, Location, Company, Salary FROM JobListings')
        job_listings = [{'JobID': row.JobID, 'Title': row.Title, 'Description': row.Description, 'Location': row.Location,
                        'Company': row.Company, 'Salary': row.Salary} for row in cursor.fetchall()]
    except pyodbc.Error as ex:
        return jsonify({'error': 'Error retrieving job listings'}), 500  # 500 Internal Server Error
    finally:
        if connection:
            connection_pool.putconn(connection)

    return jsonify(job_listings)

if __name__ == '__main__':
    app.run(debug=True)
