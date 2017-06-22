CREATE DATABASE IF NOT EXISTS mercury;

GRANT ALL ON mercury.* TO "mercury"@"localhost" IDENTIFIED BY "mercury";
GRANT ALL ON mercury.* TO "mercury"@"%" IDENTIFIED BY "mercury";
