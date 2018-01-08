from django.http import JsonResponse
from .models import Order

def custom_send_email(to_list, subject, message, sender="Ololo <noreply@ololo.com>"):
    msg = EmailMessage(subject, message, sender, to_list)
    msg.content_subtype = "html"  # Main content is now text/html
    return msg.send()

def send_mail(request):
    r = request.POST
    if r.get('type') == 'Заявка на расчет стоимости':
        name = r.get("name")
        phone = r.get("phone")
        type = r.get("type")
        text = r.get("text")
        square = r.get("square")
        place_type = r.get("place-type")
        serve = r.get("serve")
        style = r.get("style")
        Order.objects.create(name=name, phone=phone, type=type, text=text, square=square, float_type=place_type,
                             services=serve, style=style)


    elif len(r) != 0:
        name = r.get("name")
        phone = r.get("phone")
        type = r.get("type")
        Order.objects.create(name=name, phone=phone, type=type)

    return JsonResponse(r)
