import logging
from datetime import datetime
from fastapi import APIRouter
from starlette.responses import FileResponse

from fastapi import Depends
#import api.auth as auth


class Logg:
    def __init__(self) -> None:
        logging.basicConfig(filename='app.log', level=logging.INFO)
    
    def error(self, msg: str):
        logging.error(msg)
        

router = APIRouter()

@router.get("/download-log")
def download_log(): # user=Depends(auth.get_current_user)
    today = datetime.now().strftime("%Y-%m-%d")
    return FileResponse("app.log", media_type="text/plain", filename=f"app-{today}.log")