from selenium import webdriver
from selenium.webdriver.common.by import By
import time
from selenium.webdriver.common import action_chains
import gtts
driver = webdriver.Chrome()
driver.get("https://fricktob.github.io/")
driver.fullscreen_window()
# ask user which pathway they want to travel to
print()
# paths:
# to featured projects
#    to each project

# to my contact info
#    to my github
#    to my linkedin
#    to email me

# to traditional resume

# to the about me section
#    to my developer journal

# to my experiences
# to my education
# to my skills
time.sleep(2)
acceptButton = driver.find_element(by=By.CSS_SELECTOR, value='.acceptCardButton')
acceptButton.click()
time.sleep(2)
action = action_chains.ActionChains(driver)
projectButtons= driver.find_element(by=By.CSS_SELECTOR, value='.projectBox1')
action.move_to_element(projectButtons).perform()
time.sleep(2)
action.click()
#projectButtons.click()
time.sleep(3)
driver.quit()