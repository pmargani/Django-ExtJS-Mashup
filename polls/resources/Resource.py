import simplejson as json
from django.http import HttpResponse

class Resource(object):

    def requestHandler(self, request, *args, **kws):
        if request.method == 'GET':
            return self.read(request, *args, **kws)
        elif request.method == 'POST':
            return self.create(request, *args, **kws)
        elif request.method == "PUT":
            return self.update(request, *args, **kws)
        elif request.method == "DELETE":
            return self.delete(request, *args, **kws)
        else:
            return self.read(request, *args, **kws)

    def create(self, request, *args, **kws):
        self.adapter.initFromPost(json.loads(request.raw_post_data))
        items = [self.adapter.jsonDict()]
        return HttpResponse(json.dumps({
                                'success' : 'ok'
                              , self.root : items  
                            })
                          , content_type = 'application/json')
