from django.shortcuts               import render_to_response, render
from django.http  import HttpResponse, HttpResponseNotFound
import settings
# Create your views here.
def root(request):
    print "root: ", settings.EXTJS_URL
    return render_to_response("polls/root.html", {'extjs' : settings.EXTJS_URL})
