-- Showing mysql users
SELECT user, Host FROM mysql.user;

-- Creating user from any domain
CREATE USER santi@"%" IDENTIFIED BY "1234567890";

-- Adding Select and Insert permissions for ch26_ecommerce
GRANT SELECT, INSERT on ch26_ecommerce.* TO santi@"%";

-- Show user privileges
SHOW GRANTS FOR santi@"%";

-- Remove user Insert privilege
REVOKE INSERT ON ch26_ecommerce.* FROM santi@"%";

-- Deleting user
DROP USER santi@"%";

-- Change user password to 0987654321
ALTER USER santi@"%" IDENTIFIED BY "0987654321";