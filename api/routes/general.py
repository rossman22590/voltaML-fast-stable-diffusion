import logging
import sys
from pathlib import Path

from fastapi import APIRouter

from api import websocket_manager
from api.websockets.notification import Notification
from core import shared

router = APIRouter(tags=["general"])
logger = logging.getLogger(__name__)


@router.post("/interrupt")
async def interrupt():
    "Interupt the current job"

    shared.interrupt = True
    return {"message": "Interupted"}


@router.post("/shutdown")
async def shutdown():
    "Shutdown the server"

    from core.config import config
    from core.shared import uvicorn_loop, uvicorn_server

    if config.api.enable_shutdown:
        if uvicorn_server is not None:
            await websocket_manager.broadcast(
                data=Notification(
                    message="Shutting down the server",
                    severity="warning",
                    title="Shutdown",
                )
            )
            for task in shared.asyncio_tasks:
                task.cancel()
            uvicorn_server.force_exit = True
            logger.debug("Setting force_exit to True")

        assert uvicorn_server is not None
        await uvicorn_server.shutdown()
        logger.debug("Unicorn server shutdown")

        assert uvicorn_loop is not None
        uvicorn_loop.stop()
        logger.debug("Unicorn loop stopped")

        sys.exit(0)

    else:
        await websocket_manager.broadcast(
            data=Notification(
                message="Shutdown is disabled", severity="error", title="Shutdown"
            )
        )
        return {"message": "Shutdown is disabled"}


@router.get("/queue-status")
async def queue_status():
    "Get the status of the queue"

    from core.shared_dependent import gpu

    queue = gpu.queue

    return {
        "jobs": queue.jobs,
    }


@router.post("/queue-clear")
async def queue_clear():
    "Clear the queue"

    from core.shared_dependent import gpu

    queue = gpu.queue

    queue.clear()

    return {"message": "Queue cleared"}


@router.get("/themes")
async def themes():
    "Get all available themes"

    path = Path("data/themes")
    files = []
    for file in path.glob("*.json"):
        files.append(file.stem)

    files.sort()
    return files
