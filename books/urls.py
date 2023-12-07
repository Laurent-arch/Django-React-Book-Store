from django.urls import path
from .views import BookList, BookDetail

urlpatterns = [
    path('api/books/', BookList.as_view(), name='book-list'),
    path('api/books/<slug:slug>/', BookDetail.as_view(), name='book-detail'),
]