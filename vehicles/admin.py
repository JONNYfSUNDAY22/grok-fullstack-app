from django.contrib import admin

# Register your models here.

from .models import Vehicle, Company, Contact

admin.site.register(Vehicle)
admin.site.register(Company)
admin.site.register(Contact)
