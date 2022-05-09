from django.shortcuts import render, redirect
from .models import Makeup, Face, Foundation, Bronzer, Eye, Brow, Lip, Lipstick
from .forms import MakeupForm

def makeup_list(request):
    makeups = Makeup.objects.all()
    return render(request, 'maibeauty/makeup_list.html', {'makeups': makeups})

def makeup_detail(request, pk):
    makeup = Makeup.objects.get(id=pk)
    return render(request, 'maibeauty/makeup_detail.html', {'makeup': makeup})

# def makeup_create(request):
#     if request.method == 'POST':
#         form = MakeupForm(request.POST)
#         if form.is_valid():
#             makeup = form.save()
#             return redirect('makeup_detail', pk=makeup.pk)
#     else:
#         form = MakeupForm()
#     return render(request, 'maibeauty/makeup_form.html', {'form': form})


def face_list(request):
    faces = Face.objects.all()
    return render(request, 'maibeauty/face_list.html', {'faces': faces})

def face_detail(request, pk):
    face = Face.objects.get(id=pk)
    return render(request, 'maibeauty/face_detail.html', {'face': face})


def foundation_list(request):
    foundations = Foundation.objects.all()
    return render(request, 'maibeauty/foundation_list.html', {'foundations': foundations})

def bronzer_list(request):
    bronzers = Bronzer.objects.all()
    return render(request, 'maibeauty/bronzer_list.html', {'bronzers': bronzers})


def eye_list(request):
    eyes = Eye.objects.all()
    return render(request, 'maibeauty/eye_list.html', {'eyes': eyes})

def eye_detail(request, pk):
    eye = Eye.objects.get(id=pk)
    return render(request, 'maibeauty/eye_detail.html', {'eye': eye})


def brow_list(request):
    brows = Brow.objects.all()
    return render(request, 'maibeauty/brow_list.html', {'brows': brows})


def lip_list(request):
    lips = Lip.objects.all()
    return render(request, 'maibeauty/lip_list.html', {'lips': lips})

def lip_detail(request, pk):
    lip = Lip.objects.get(id=pk)
    return render(request, 'maibeauty/lip_detail.html', {'lip': lip})


def lipstick_list(request):
    lipsticks = Lipstick.objects.all()
    return render(request, 'maibeauty/lipstick_list.html', {'lipsticks': lipsticks})