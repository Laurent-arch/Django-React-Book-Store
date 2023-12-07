from django.urls import path
from .views import BookList, BookDetail
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('api/books/', BookList.as_view(), name='book-list'),
    path('api/books/<slug:slug>/', BookDetail.as_view(), name='book-detail'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)