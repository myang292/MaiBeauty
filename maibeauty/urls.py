from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter
from maibeauty import serializers
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [

    path('token/obtain', jwt_views.TokenObtainPairView.as_view(), name='token-create'),
    path('token/refresh', jwt_views.TokenRefreshView.as_view(), name='token-refresh'),
    path('blacklist/', views.UserLogout.as_view(), name='token-blacklist'),

    path('users/', views.UserList.as_view(), name='user_list'),
    path('users/create', views.UserCreate.as_view(), name='user_create'),
    path('users/logout', views.UserLogout.as_view(), name='user_logout'),
    path('users/<int:pk>', views.UserDetail.as_view(), name='user_detail'),
    path('users/<str:username>', views.UserDetailByUsername.as_view(), name='user_detail_by_username'),



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