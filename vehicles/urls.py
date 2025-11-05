from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'vehicles', views.VehicleViewSet)
router.register(r'companies', views.CompanyViewSet)
router.register(r'contacts', views.ContactViewSet)

urlpatterns = router.urls