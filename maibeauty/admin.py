from django.contrib import admin
from .models import Makeup, Face, Foundation, Bronzer, Eye, Brow, Lip, Lipstick

class UserAdmin(admin.ModelAdmin):
    model = User

admin.site.register(User, UserAdmin)
admin.site.register(Makeup)
admin.site.register(Face)
admin.site.register(Foundation)
admin.site.register(Bronzer)
admin.site.register(Eye)
admin.site.register(Brow)
admin.site.register(Lip)
admin.site.register(Lipstick)