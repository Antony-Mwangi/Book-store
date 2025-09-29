# articles/views.py
from rest_framework import viewsets, permissions
from .models import Article
from .serializers import ArticleSerializer



class ArticleViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Article.objects.all().order_by('-created_at')
    serializer_class = ArticleSerializer
    permission_classes = [permissions.AllowAny]  # anyone can read
