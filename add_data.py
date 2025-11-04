import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from django.contrib.auth.models import User
from vehicles.models import Vehicle

# Create superuser if not exists
if not User.objects.filter(username='admin').exists():
    User.objects.create_superuser('admin', 'admin@example.com', 'pass123')

# Add test vehicles if not exist
if not Vehicle.objects.filter(plate='ABC123').exists():
    Vehicle.objects.create(make='Toyota', model='Camry', year=2020, plate='ABC123', vin='12345678901234567', status='Active')

if not Vehicle.objects.filter(plate='DEF456').exists():
    Vehicle.objects.create(make='Honda', model='Civic', year=2019, plate='DEF456', vin='76543210987654321', status='Inactive')