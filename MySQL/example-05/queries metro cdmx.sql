DESCRIBE `lines`;

-- Showing the red line stations (line 6)
SELECT DISTINCT station_id, stations.name
	FROM lines_stations
	INNER JOIN stations
    ON lines_stations.station_id = stations.id
    WHERE line_id = 6;
    
-- Inserting coordinates of a station
INSERT INTO locations (station_id, location) VALUES
	(1, POINT(-99.14433718, 19.40702104));

-- Getting latitude and longitude of the Basilica
SELECT 
	ST_X(location) AS latitude,
    ST_Y(location) AS longitude
    FROM locations
    WHERE station_id IN (
		SELECT id FROM stations WHERE name LIKE "%basilica%"
    );
    
-- Calculating km distance between Basilica and Martin Carrera
SELECT
	ST_Distance_Sphere(
		(
			SELECT location FROM locations
			WHERE station_id IN (
				SELECT id FROM stations
					WHERE name LIKE "%basilica%"
			)
        ),
        (
			SELECT location FROM locations
			WHERE station_id IN (
				SELECT id FROM stations
					WHERE name LIKE "%martin carrera%"
			)
        )
    )/1000 AS Distance;
    
-- Showing lines with the quantity of stations
SELECT
	`lines`.name, `lines`.color,
    COUNT(DISTINCT station_id) as stations
	FROM lines_stations
	INNER JOIN stations
    ON lines_stations.station_id = stations.id
    INNER JOIN `lines`
    ON lines_stations.line_id = `lines`.id
    GROUP BY line_id
    HAVING stations >= 20;
    
SELECT `lines`.`name`, `lines`.`color`,
	COUNT(DISTINCT `lines_stations`.`station_id`) AS "N. estaciones"	
	FROM `lines`
    INNER JOIN `lines_stations`
    ON `lines`.`id` = `lines_stations`.`line_id`
    GROUP BY `lines`.`id`
    HAVING `N. estaciones` >= 20;
