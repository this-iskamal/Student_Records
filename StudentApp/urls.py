from django.urls import path
from . views import *

urlpatterns = [
    path('get-student-list',GetStudentRecord.as_view(),name="student_record_list"),
    path('add-new-student',StudentRecord.as_view(),name="add-new_student"),
]