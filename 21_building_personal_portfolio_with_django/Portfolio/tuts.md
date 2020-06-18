after addding static
use this command

=> python manage.py collectstatic

after that it is  very easy to link file to a project



to find the full url

{% for job in jobs %}

{{job.image.urls}}

{% endfor %}