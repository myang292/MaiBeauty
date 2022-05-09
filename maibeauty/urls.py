from django.urls import path
from . import views

urlpatterns = [
    path('', views.makeup_list, name='makeup_list'),
    path('faces/<int:pk>', views.face_list, name='face_list'),
    path('foundations/<int:pk>', views.foundation_list, name='foundation_list'),
    path('bronzers/<int:pk>', views.bronzer_list, name='bronzer_list'),
    path('eyes/<int:pk>', views.eye_list, name='eye_list'),
    path('brows/<int:pk>', views.brow_list, name='brow_list'),
    path('lips/<int:pk>', views.lip_list, name='lip_list'),
    path('lipsticks/<int:pk>', views.lipstick_list, name='lipstick_list')
]