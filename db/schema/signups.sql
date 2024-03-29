DROP TABLE IF EXISTS signups;
CREATE TABLE IF NOT EXISTS signups (
  id          bigint(11) NOT NULL AUTO_INCREMENT,
  email       varchar(256) NOT NULL,
  created_at  timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  updated_at  timestamp NOT NULL DEFAULT now(),
  PRIMARY KEY (`id`),
  UNIQUE KEY (`email`)
) ENGINE = INNODB;
