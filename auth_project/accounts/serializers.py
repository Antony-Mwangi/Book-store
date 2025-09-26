from django.contrib.auth.models import User
from rest_framework import serializers
from .models import Profile

class UserSerializer(serializers.ModelSerializer):
   password = serializers.CharField(write_only=True)
   
   class Meta:
       model = User
       fields = ('id', 'username', 'email', 'password')
       
   def create (self, validated_data):
       user = User.objects.create_user(**validated_data)
       return user
   
   
class ProfileSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username', read_only=True)
    email = serializers.EmailField(source='user.email', read_only=True)
    
    class Meta:
        model = Profile
        fields = ['username','email', 'profile_picture']