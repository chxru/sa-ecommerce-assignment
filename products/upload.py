import json
import os
from dotenv import load_dotenv
from pymongo import MongoClient, InsertOne

load_dotenv()

categories = {
    "case-accessory.json": "case-accessory",
    "case-fan.json": "case-fan",
    "case.json": "case",
    "cpu-cooler.json": "cpu-cooler",
    "cpu.json": "cpu",
    "external-hard-drive.json": "external-hard-drive",
    "fan-controller.json": "fan-controller",
    "headphones.json": "headphones",
    "internal-hard-drive.json": "internal-hard-drive",
    "keyboard.json": "keyboard",
    "memory.json": "memory",
    "monitor.json": "monitor",
    "motherboard.json": "motherboard",
    "mouse.json": "mouse",
    "optical-drive.json": "optical-drive",
    "os.json": "os",
    "power-supply.json": "power-supply",
    "sound-card.json": "sound-card",
    "speakers.json": "speakers",
    "thermal-paste.json": "thermal-paste",
    "ups.json": "ups",
    "video-card.json": "video-card",
    "webcam.json": "webcam",
    "wired-network-card.json": "wired-network-card",
    "wireless-network-card.json": "wireless-network-card",
}

quries = []


def read_json(file_path, category):
    print(category)
    with open(file_path, "r") as file:
        data = json.load(file)

        for product in data:
            product["category"] = categories[category]
            quries.append(InsertOne(product))


for file in os.listdir(os.path.join(os.getcwd(), "products", "json")):
    if file.endswith(".json"):
        read_json(os.path.join(os.getcwd(), "products", "json", file), file)

client = MongoClient("mongodb+srv://dev:FslC3E2AkMVB3i3Q@saecom.qah8kti.mongodb.net/")
db = client["test"]
collection = db["products"]

result = collection.bulk_write(quries)
print(result)

client.close()
