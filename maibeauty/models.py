from django.db import models

class Makeup(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    


class Face(models.Model):
    name = models.CharField(max_length=100)
    makeup = models.ForeignKey(Makeup, on_delete=models.CASCADE, related_name='face', null = True, blank = True)

    def __str__(self):
        return self.name       

class Foundation(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()
    face = models.ForeignKey(Face, on_delete=models.CASCADE, related_name='face', null = True, blank = True)

    def __str__(self):
        return self.name  

class Bronzer(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()
    face = models.ForeignKey(Face, on_delete=models.CASCADE, related_name='bronzer', null = True, blank = True)

    def __str__(self):
        return self.name





class Eye(models.Model):
    name = models.CharField(max_length=100)
    makeup = models.ForeignKey(Makeup, on_delete=models.CASCADE, related_name='eyes', null = True, blank = True)

    def __str__(self):
        return self.name

class Brow(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()
    makeup = models.ForeignKey(Eye, on_delete=models.CASCADE, related_name='eyes', null = True, blank = True)

    def __str__(self):
        return self.name





class Lip(models.Model):
    name = models.CharField(max_length=100)
    makeup = models.ForeignKey(Makeup, on_delete=models.CASCADE, related_name='lips', null = True, blank = True)


    def __str__(self):
        return self.name

class Lipstick(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    photo_url = models.TextField()
    lips = models.ForeignKey(Lip, on_delete=models.CASCADE, related_name='lips', null = True, blank = True)


    def __str__(self):
        return self.name