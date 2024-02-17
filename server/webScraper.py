from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException

# Create an EdgeDriver instance
driver = webdriver.Edge()
review_class = "sc-1hez2tp-0"  # Use only one class name
review_array=[]

for page in range(44):
    pg_num = page + 1
    # Open a website
    driver.get(f"https://www.zomato.com/mumbai/ettarra-1-juhu/reviews?page={pg_num}&sort=dd&filter=reviews-dd")

    # Function to get and print reviews
    def get_reviews():
        reviews = driver.find_elements(By.CLASS_NAME, review_class)
        
        for review in reviews:
            print(review.text)
            review_array.append(review)

    get_reviews()

    try:
        print(review_array)
        next_page_element = WebDriverWait(driver, 50).until(
            EC.presence_of_element_located((By.XPATH, f'//a[contains(@href, "page={pg_num + 1}")]'))
            
        )
        next_page_element.click()
    except NoSuchElementException:
        break

# Close the browser
driver.quit()