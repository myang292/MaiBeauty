from socket import fromshare
from django import forms
from .models import Makeup, Face, Foundation, Bronzer, Eye, Brow, Lip, Lipstick


class MakeupForm(forms.ModelForm):

    class Meta:
        model = Makeup
        field = ('name')

class FaceForm(forms.ModelForm):

    class Meta:
        model = Face
        field = ('name', 'makeup')

class FoundationForm(forms.ModelForm):

    class Meta:
        model = Foundation
        field = ('name', 'description', 'photo_url')

class BronzerForm(forms.ModelForm):

    class Meta:
        model = Bronzer
        field = ('name', 'description', 'photo_url')

class EyeForm(forms.ModelForm):

    class Meta:
        model = Eye
        field = ('name', 'makeup')

class BrowForm(forms.ModelForm):

    class Meta:
        model = Brow
        field = ('name', 'description', 'photo_url')

class LipForm(forms.ModelForm):

    class Meta:
        model = Lip
        field = ('name', 'makeup')

class LipstickForm(forms.ModelForm):

    class Meta:
        model = Lipstick
        field = ('name', 'description', 'photo_url')
