DEBUG = False
ALLOWED_HOSTS = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db1',
        'USER': 'indesign',
        'PASSWORD': 'thiswasez',
        'HOST': 'localhost',
        'PORT': '',
    }
}