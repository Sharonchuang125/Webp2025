from django.urls import path
from . import views

# 0226
# urlpatterns = [
#     path('', views.myIndex, name = 'index'),
# ]

# 0305
# urlpatterns = [
#     path('', views.HelloApiView.as_view(), name = 'index'),
# ]


# 0312
urlpatterns = [
    path('add', views.add_post, name='add_post'),
    path('list', views.list_post, name='list_post'),
]
