from django.shortcuts import render

# Create your views here.

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import StudentSerializer
from rest_framework.decorators import permission_classes , api_view
from rest_framework.permissions import AllowAny
from .models import *

class StudentRecord(APIView):

    permission_classes = [AllowAny]

    def post(self,request):
        serializer = StudentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Successfully Registered" , 'success':True , 'student_fname':serializer.data.first_name , 'student_lname':serializer.data.last_name}, status=status.HTTP_200_CREATED)
        return Response({'message':serializer.errors , 'success':False} , status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
    


class GetStudentRecord(APIView):

    permission_classes = [AllowAny]

    def get(self,request):
        students = StudentModel.objects.all()
        serializer = StudentSerializer(students , many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)


    