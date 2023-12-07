from django.db import models
from django.contrib.auth.models import User
from django.utils.text import slugify

class Book(models.Model):
    title = models.CharField(max_length=200, unique=True)
    slug = models.SlugField(max_length=200, unique=True, blank=True)
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='books')
    genre = models.CharField(max_length=200, unique=True)
    synopsis = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    cover_image = models.ImageField(upload_to='book_covers/', blank=True, null=True)

    class Meta:
        ordering = ['-created_at']

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title