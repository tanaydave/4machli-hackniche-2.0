from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

driver = webdriver.Edge()
review_class = "sc-1hez2tp-0" 
review_array=[]

for page in range(30):
    pg_num = page + 1
    driver.get(f"https://www.zomato.com/mumbai/ettarra-1-juhu/reviews?page={pg_num}&sort=dd&filter=reviews-dd")

    def get_reviews():
        reviews = driver.find_elements(By.CLASS_NAME, review_class)
        
        for review in reviews:
            print(review.text)
            review_array.append(review.text)

    get_reviews()
    
    try:
        next_page_element = WebDriverWait(driver, 50).until(
            EC.presence_of_element_located((By.XPATH, f'//a[contains(@href, "page={pg_num + 1}")]')) 
        )
        next_page_element.click()
    except NoSuchElementException:
        break
driver.quit()

reviews = [review for review in review_array if review]
final_reviews = []
for i in range(len(reviews)):
    if 'Votes' in reviews[i]:
        final_reviews.append(reviews[i-1])
        
print(final_reviews)      
    