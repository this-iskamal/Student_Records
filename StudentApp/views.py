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
        first_name= request.data.get("first_name")
        last_name = request.data.get("last_name")
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Successfully Registered" ,'first_name':first_name ,'last_name':last_name,'success':True}, status=status.HTTP_201_CREATED)
        return Response({'message':serializer.errors , 'success':False} , status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)
    


class GetStudentRecord(APIView):

    permission_classes = [AllowAny]

    def get(self,request, format=None):
        students = StudentModel.objects.all()
        serializer = StudentSerializer(students , many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
    

class UpdateStudent(APIView):

    permission_classes = [AllowAny]


    def get_student(self,student_id):
        try:
            return StudentModel.objects.get(id=student_id)

        except StudentModel.DoesNotExist:
            return None
        

    def put(self,request, student_id , format =None):
        student = self.get_student(student_id)
        if not student:
            return Response ({'message':"Student not found", 'success':False},status=status.HTTP_204_NO_CONTENT)

        serializer = StudentSerializer(student,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message":"Student Updated Successfully",'sucess':True},status=status.HTTP_200_OK)
        return Response ({"message":"Failed to update student","errors":serializer.errors,'sucess':False},status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)