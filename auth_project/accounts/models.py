from django.db import models
from django.contrib.auth.models import User


def profile_upload_path(instance, filename):
    return f"profile_pics/user_{instance.user.id}/{filename}"

class Profile(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE, related_name="profile")
    full_name = models.CharField(max_length=200, blank=True)
    avatar = models.ImageField(upload_to = profile_upload_path, null=True, blank = True)
    favorite_genre = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return f"Profile: {self.user.username}"