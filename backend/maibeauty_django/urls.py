"""maibeauty URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    # path('admin/', admin.site.urls), name='makeup_list'),
    path('makeup/', views.MakeupDetail.as_view(), name='makeup_detail'),
    path('foundations/<int:pk>', views.foundation_detail.as_view(), name='foundation_detail'),
    path('bronzers/<int:pk>', views.bronzer_detail.as_view(), name='bronzer_detail'),
    path('brows/<int:pk>', views.brow_detail.as_view(), name='brow_detail'),
    path('lips/<int:pk>', views.lip_detail.as_view(), name='lip_detail'),
    # path('api-auth', include('rest_framework.urls', namespace='rest_framework'))
]
