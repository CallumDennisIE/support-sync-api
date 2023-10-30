release: python manage.py makemigrations && python manage.py migrate
web: gunicorn support_sync_api.wsgi