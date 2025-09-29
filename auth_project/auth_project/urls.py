# # auth_project/urls.py
# from django.contrib import admin
# from django.urls import path, include
# from django.conf import settings
# from django.conf.urls.static import static

# urlpatterns = [
#     path('admin/', admin.site.urls),
#     path('api/register/', include('accounts.urls')),
#     path('api/login/', include('accounts.urls')),
#     path('api/token/refresh/', include('accounts.urls')),
#     path('api/profile/', include('accounts.urls')),
#     path('api/books/', include('books.urls')),
#     path('api/articles/', include('articles.urls')), 
# ]

# if settings.DEBUG:
#     urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)


# auth_project/urls.py
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('accounts.urls')),  # only include once here
    path('api/books/', include('books.urls')),
    path('api/articles/', include('articles.urls')), 
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
