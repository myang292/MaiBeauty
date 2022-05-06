from django.db import models

class Makeup(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Foundation(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()

    def __str__(self):
        return self.name        

class Bronzer(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Brows(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()

    def __str__(self):
        return self.name

class Lips(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()

    def __str__(self):
        return self.name

