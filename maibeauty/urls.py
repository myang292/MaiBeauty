from django.urls import path
from . import views

urlpatterns = [

    path('makeups/', views.MakeupList.as_view(), name='makeup_list'),
    path('makeups/<int:pk>', views.MakeupList.as_view(), name='makeup_detail'),

    path('faces/', views.FaceList.as_view(), name='face_list'),
    path('faces/<int:pk>', views.FaceList.as_view(), name='face_detail'),

    path('foundation/', views.FoundationList.as_view(), name='foundation_list'),
    path('foundation/<int:pk>', views.FoundationList.as_view(), name='foundation_detail'),

    path('bronzer/', views.BronzerList.as_view(), name='bronzer_list'),
    path('bronzer/<int:pk>', views.BronzerList.as_view(), name='bronzer_ldetail'),

    path('eyes/', views.EyeList.as_view(), name='eye_list'),
    path('eyes/<int:pk>', views.EyeList.as_view(), name='eye_detail'),

    path('brows/', views.BrowList.as_view(), name='brow_list'),
    path('brows/<int:pk>', views.BrowList.as_view(), name='brow_detail'),

    path('lips/', views.LipList.as_view(), name='lip_list'),
    path('lips/<int:pk>', views.LipList.as_view(), name='lip_detail'),

    path('lipsticks/', views.LipstickList.as_view(), name='lipsticks_list'),
    path('lipsticks/<int:pk>', views.LipstickList.as_view(), name='lipsticks_detail')
]