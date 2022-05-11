from rest_framework import generics
from .serializers import MakeupSerializer, FaceSerializer, FoundationSerializer, BronzerSerializer, EyeSerializer, BrowSerializer, LipSerializer, LipstickSerializer
from .models import Makeup, Face, Foundation, Bronzer, Eye, Brow, Lip, Lipstick
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken


class UserList(APIView):
    def get(self, request):
        users = User.objects.all()
        return Response(users)

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'id'

class UserCreate(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                json = serializer.data
                return Response(json, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserDetailByUsername(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    lookup_field = 'username'

class UserLogout(APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = ()

    def post(self, request):
        refresh_token = request.data['refresh_token']
        token = RefreshToken(refresh_token)
        token.blacklist()
        return Response(status=status.HTTP_205_RESET_CONTENT)


        


class MakeupList(generics.ListCreateAPIView):
    queryset = Makeup.objects.all()
    serializer_class = MakeupSerializer

class MakeupDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Makeup.objects.all()
    serialize_class = MakeupSerializer


class FaceList(generics.ListCreateAPIView):
    queryset = Face.objects.all()
    serializer_class = FaceSerializer

class FaceDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Face.objects.all()
    serialize_class = FaceSerializer


class FoundationList(generics.ListCreateAPIView):
    queryset = Foundation.objects.all()
    serializer_class = FoundationSerializer

class FoundationDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Foundation.objects.all()
    serialize_class = FoundationSerializer


class BronzerList(generics.ListCreateAPIView):
    queryset = Bronzer.objects.all()
    serializer_class = BronzerSerializer

class ronzerDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Bronzer.objects.all()
    serialize_class = BronzerSerializer


class EyeList(generics.ListCreateAPIView):
    queryset = Eye.objects.all()
    serializer_class = EyeSerializer

class EyeDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Eye.objects.all()
    serialize_class = EyeSerializer


class BrowList(generics.ListCreateAPIView):
    queryset = Brow.objects.all()
    serializer_class = BrowSerializer

class BrowDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Brow.objects.all()
    serialize_class = BrowSerializer


class LipList(generics.ListCreateAPIView):
    queryset = Lip.objects.all()
    serializer_class = LipSerializer

class LipDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lip.objects.all()
    serialize_class = LipSerializer


class LipstickList(generics.ListCreateAPIView):
    queryset = Lipstick.objects.all()
    serializer_class = LipstickSerializer

class LipstickDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Lipstick.objects.all()
    serialize_class = LipstickSerializer