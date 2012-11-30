var datalibMock = {
    ajaxUrl: "url/null",
    schema: {"default_language": "default", "id_string": "good_eats_other", "children": [{"name": "submit_data", "type": "today"}, {"name": "food_type", "label": "Type of Eat", "type": "select one", "children": [{"name": "morning_food", "label": "Morning Food"}, {"name": "lunch", "label": "Lunch Time"}, {"name": "dinner", "label": "Dinner"}, {"name": "libations", "label": "Libations"}, {"name": "caffeination", "label": "Caffeination"}, {"name": "deserts", "label": "Deserts"}, {"name": "street_meat", "label": "Street Meat"}, {"name": "streat_sweets", "label": "Street Sweets"}, {"name": "savory_snacks", "label": "Savory Snacks"}, {"name": "baked_goods", "label": "Baked Goods"}, {"name": "drunk_food", "label": "Best consumed when drunk"}, {"name": "not_sure", "label": "Not Sure What I Just Ate"}, {"name": "other", "label": "Other"}]}, {"name": "food_type_other", "label": "Specify other.", "bind": {"relevant": "selected(../food_type, 'other')"}, "type": "text"}, {"name": "description", "label": "Description", "type": "text"}, {"name": "amount", "hint": "In local currency", "label": "Amount", "type": "decimal"}, {"name": "rating", "label": "Rating", "type": "select one", "children": [{"name": "nasty", "label": "Epic Eat"}, {"name": "delectible", "label": "Delectible"}, {"name": "nothing_special", "label": "Nothing Special"}, {"name": "bad", "label": "What was I thinking"}]}, {"name": "risk_factor", "label": "Risk Factor", "type": "select one", "children": [{"name": "low_risk", "label": "Low Risk"}, {"name": "medium_risk", "label": "Medium Risk (Questionable)"}, {"name": "high_risk", "label": "High Risk (Hope it was worth it)"}]}, {"name": "food_photo", "hint": "What you are about to eat", "label": "Food Pic", "type": "photo"}, {"name": "location_name", "label": "Location Name", "type": "text"}, {"name": "location_photo", "hint": "Where the food came from", "label": "Served At", "type": "photo"}, {"name": "gps", "hint": "So you can find it again", "label": "Location", "type": "geopoint"}, {"name": "imei", "type": "deviceid"}, {"name": "submit_date", "type": "today"}], "name": "good_eats_other", "title": "good_eats_other", "type": "survey"},
    multilang_schema: {"default_language": "default", "id_string": "good_eats_multilang", "children": [{"name": "submit_data", "type": "today"}, {"name": "food_type", "label": {"French": "Type of Eat Fr", "English": "Type of Eat"}, "type": "select one", "children": [{"name": "morning_food", "label": {"French": "Morning Food Fr", "English": "Morning Food"}}, {"name": "lunch", "label": {"French": "Lunch Time Fr", "English": "Lunch Time"}}, {"name": "dinner", "label": {"French": "Dinner Fr", "English": "Dinner"}}, {"name": "libations", "label": {"French": "Libations Fr", "English": "Libations"}}, {"name": "caffeination", "label": {"French": "Caffeination Fr", "English": "Caffeination"}}, {"name": "deserts", "label": {"French": "Deserts Fr", "English": "Deserts"}}, {"name": "street_meat", "label": {"French": "Street Meat Fr", "English": "Street Meat"}}, {"name": "streat_sweets", "label": {"French": "Street Sweets Fr", "English": "Street Sweets"}}, {"name": "savory_snacks", "label": {"French": "Savory Snacks Fr", "English": "Savory Snacks"}}, {"name": "baked_goods", "label": {"French": "Baked Goods Fr", "English": "Baked Goods"}}, {"name": "drunk_food", "label": {"French": "Best consumed when drunk Fr", "English": "Best consumed when drunk"}}, {"name": "not_sure", "label": {"French": "Not Sure What I Just Ate Fr", "English": "Not Sure What I Just Ate"}}, {"name": "other", "label": "Other"}]}, {"name": "food_type_other", "label": "Specify other.", "bind": {"relevant": "selected(../food_type, 'other')"}, "type": "text"}, {"name": "description", "label": {"French": "Description Fr", "English": "Description"}, "type": "text"}, {"name": "amount", "hint": "In local currency", "label": {"French": "Amount Fr", "English": "Amount"}, "type": "decimal"}, {"name": "rating", "label": {"French": "Rating Fr", "English": "Rating"}, "type": "select one", "children": [{"name": "nasty", "label": {"French": "Epic Eat Fr", "English": "Epic Eat"}}, {"name": "delectible", "label": {"French": "Delectible Fr", "English": "Delectible"}}, {"name": "nothing_special", "label": {"French": "Nothing Special Fr", "English": "Nothing Special"}}, {"name": "bad", "label": {"French": "What was I thinking Fr", "English": "What was I thinking"}}]}, {"name": "risk_factor", "label": {"French": "Risk Factor Fr", "English": "Risk Factor"}, "type": "select one", "children": [{"name": "low_risk", "label": {"French": "Low Risk Fr", "English": "Low Risk"}}, {"name": "medium_risk", "label": {"French": "Medium Risk (Questionable) Fr", "English": "Medium Risk (Questionable)"}}, {"name": "high_risk", "label": {"French": "High Risk (Hope it was worth it) Fr", "English": "High Risk (Hope it was worth it)"}}]}, {"name": "food_photo", "hint": "What you are about to eat", "label": {"French": "Food Pic Fr", "English": "Food Pic"}, "type": "photo"}, {"name": "location_name", "label": {"French": "Location Name Fr", "English": "Location Name"}, "type": "text"}, {"name": "location_photo", "hint": "Where the food came from", "label": {"French": "Served At Fr", "English": "Served At"}, "type": "photo"}, {"name": "gps", "hint": "So you can find it again", "label": {"French": "Location Fr", "English": "Location"}, "type": "geopoint"}, {"name": "imei", "type": "deviceid"}, {"name": "submit_date", "type": "today"}], "name": "good_eats_multilang", "title": "good_eats_multilang", "type": "survey"},
    data: [{"rating": "delectible", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_xform_id_string": "good_eats", "food_type": "streat_sweets", "_geolocation": [41.0182375414297, 28.9709482714534], "food_photo": "1325233641666.jpg", "location_name": "Tahiri Osmanli Lokmaci", "comments": "Pure oil and honey", "location_photo": "1325233694501.jpg", "gps": "41.0182375414297 28.97094827145338 39.0 30.0", "description": "Turkish donuts", "_uuid": "41260d9d9b1944ce8aa91c9e7427a891", "imei": "358490042584319", "_status": "submitted_via_web", "submit_date": "2011-12-30", "_submission_time": "2011-12-30T08:19:48", "submit_data": "2011-12-30", "_attachments": ["mberg/attachments/1325233694501.jpg", "mberg/attachments/1325233641666.jpg"], "amount": "2.0", "_id": 22457}, {"rating": "epic_eat", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_xform_id_string": "good_eats", "food_type": "deserts", "_geolocation": [41.0228132642806, 28.9776993077248], "food_photo": "1325233872157.jpg", "location_name": "Karakoy Gulluoglu", "comments": "Some of the best ever", "location_photo": "1325233903109.jpg", "gps": "41.02281326428056 28.977699307724833 39.9000244140625 40.0", "description": "Baklava", "_uuid": "f8282787848c41258aa22f53dc07aff8", "imei": "358490042584319", "_status": "submitted_via_web", "submit_date": "2011-12-30", "_submission_time": "2011-12-30T08:35:45", "submit_data": "2011-12-30", "_attachments": ["mberg/attachments/1325233903109.jpg", "mberg/attachments/1325233872157.jpg"], "amount": "2.75", "_id": 22458}, {"rating": "delectible", "description": "Turkish burger ", "_status": "submitted_via_web", "submit_date": "2011-12-30", "_submission_time": "2011-12-30T08:44:00", "_uuid": "030e20a618f74ac1ad597b35883f4314", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": [], "amount": "2.0", "_geolocation": [41.0145280882716, 28.9756600745022], "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "street_meat", "_id": 22460, "submit_data": "2011-12-30", "gps": "41.01452808827162 28.97566007450223 57.4000244140625 30.0"}, {"rating": "delectible", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_xform_id_string": "good_eats", "food_type": "lunch", "_geolocation": [41.0170824732631, 28.9690599963069], "food_photo": "1325249519178.jpg", "location_name": "Durum Bufe", "comments": "Try the yogurt drink", "location_photo": "1325250480886.jpg", "gps": "41.017082473263144 28.969059996306896 39.5 55.0", "description": "Chicken doner", "_uuid": "218bff1e4ca6480cb76f1f5eba59598b", "imei": "358490042584319", "_status": "submitted_via_web", "submit_date": "2011-12-30", "_submission_time": "2011-12-30T08:46:05", "submit_data": "2011-12-30", "_attachments": ["mberg/attachments/1325249519178.jpg", "mberg/attachments/1325250480886.jpg"], "amount": "9.0", "_id": 22461}, {"rating": "delectible", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_xform_id_string": "good_eats", "food_type": "streat_sweets", "_geolocation": [41.0167062934488, 28.9701294433326], "food_photo": "1325233793480.jpg", "location_name": "Tatlic Safa", "comments": "Great staff", "location_photo": "1325233817453.jpg", "gps": "41.016706293448806 28.970129443332553 44.9000244140625 40.0", "description": "Fistikli", "_uuid": "3f2f315ba01947e8bd918399cf5408b1", "imei": "358490042584319", "_status": "submitted_via_web", "submit_date": "2011-12-30", "_submission_time": "2011-12-30T09:53:56", "submit_data": "2011-12-30", "_attachments": ["mberg/attachments/1325233817453.jpg", "mberg/attachments/1325233793480.jpg"], "amount": "2.0", "_id": 22463}, {"rating": "delectible", "location_name": "Kosebasi Nargile ", "description": "Shisha! ", "comments": "Should have brought a board game! ", "submit_date": "2011-12-30", "_submission_time": "2012-01-01T14:10:14", "_uuid": "1f41b91b1d8748cfa60b7361620c7a58", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1325234084489.jpg", "mberg/attachments/1325234137252.jpg"], "location_photo": "1325234137252.jpg", "amount": "20.0", "_geolocation": [null, null], "submit_data": "2011-12-30", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "drunk_food", "_id": 22467, "_status": "submitted_via_web", "food_photo": "1325234084489.jpg"}, {"rating": "delectible", "gps": "38.64260719623417 34.82954294420779 1133.699951171875 15.0", "location_name": "Kale Terasse ", "description": "Testi Kebab Beef", "_status": "submitted_via_web", "submit_date": "2012-01-01", "_submission_time": "2012-01-01T14:17:43", "_uuid": "73995744688741d4a1d85b9ad7d746df", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1325447654476.jpg"], "amount": "14.0", "_geolocation": [38.6426071962342, 34.8295429442078], "comments": "Pottery kebab.  Reminds me of chow mein. ", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "dinner", "_id": 22471, "submit_data": "2012-01-01", "food_photo": "1325447654476.jpg"}, {"rating": "delectible", "gps": "38.643232850000004 34.8287586 0.0 65.0", "location_name": "Farmville ", "description": "Manti (Turkish ravioli)  and saut\u00e9ed mushrooms", "submit_date": "2011-12-31", "_submission_time": "2012-01-02T22:41:33", "_uuid": "93655d121084457098783d55e23764ce", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1325331368600.jpg", "mberg/attachments/1325331442250.jpg"], "location_photo": "1325331442250.jpg", "amount": "12.0", "_geolocation": [38.64323285, 34.8287586], "submit_data": "2011-12-31", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "lunch", "_id": 22473, "_status": "submitted_via_web", "food_photo": "1325331368600.jpg"}, {"rating": "epic_eat", "gps": "38.420649245381355 27.136479495093226 56.9000244140625 35.0", "location_name": "Ustabasi ", "description": "Tander Doner", "submit_date": "2012-01-03", "_submission_time": "2012-01-05T10:35:49", "_uuid": "34da20f7a02447ddb430a88802714c97", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1325593932637.jpg", "mberg/attachments/1325593910357.jpg"], "location_photo": "1325593932637.jpg", "amount": "18.0", "_geolocation": [38.4206492453814, 27.1364794950932], "submit_data": "2012-01-03", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "lunch", "_id": 22507, "_status": "submitted_via_web", "food_photo": "1325593910357.jpg"}, {"rating": "delectible", "gps": "37.951282449999994 27.3700048 0.0 85.0", "location_name": "Tolga Copsis ", "description": "Cotsi ", "submit_date": "2012-01-04", "_submission_time": "2012-01-05T10:39:09", "_uuid": "68ed8fb48c1243a5b60525987f18f3de", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1325672494341.jpg", "mberg/attachments/1325672462974.jpg"], "location_photo": "1325672494341.jpg", "amount": "8.0", "_geolocation": [37.95128245, 27.3700048], "submit_data": "2012-01-04", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "lunch", "_id": 22512, "_status": "submitted_via_web", "food_photo": "1325672462974.jpg"}, {"rating": "epic_eat", "description": "Turkish coffee", "food_type": "caffeination", "food_photo": "1325755277925.jpg", "submit_date": "2012-01-05", "_submission_time": "2012-01-05T10:44:16", "_uuid": "0cce5f448df1484c8bfe25b91d6b25b9", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1325755277925.jpg", "mberg/attachments/1325755322963.jpg"], "location_photo": "1325755322963.jpg", "amount": "2.5", "_geolocation": [37.9504400258884, 27.3723626788706], "_xform_id_string": "good_eats", "imei": "358490042584319", "_status": "submitted_via_web", "_id": 22518, "submit_data": "2012-01-05", "gps": "37.95044002588838 27.37236267887056 55.70001220703125 20.0"}, {"rating": "epic_eat", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_xform_id_string": "good_eats", "food_type": "deserts", "_geolocation": [41.0078548779711, 28.9765599556267], "food_photo": "1325883519633.jpg", "location_name": "Edebiyat Kiraathanesi ", "comments": "Maybe best rice pudding ever,  very rich,  best shared. ", "location_photo": "1325883576343.jpg", "gps": "41.00785487797111 28.976559955626726 98.5999755859375 25.0", "description": "Rice Pudding ", "_uuid": "0a005d5beef54c1cbe9f99c9d8152d4e", "imei": "358490042584319", "_status": "submitted_via_web", "submit_date": "2012-01-06", "_submission_time": "2012-01-08T12:01:11", "submit_data": "2012-01-06", "_attachments": ["mberg/attachments/1325883519633.jpg", "mberg/attachments/1325883576343.jpg"], "amount": "6.0", "_id": 22573}, {"rating": "delectible", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_xform_id_string": "good_eats", "food_type": "lunch", "_geolocation": [45.5278388, -73.5751400714286], "food_photo": "1326658785039.jpg", "location_name": "Frango", "comments": "Get the fries over potatoes ", "location_photo": "1326658821173.jpg", "gps": "45.527838800000005 -73.57514007142858 0.0 60.0", "description": "Portuguese Chicken", "_uuid": "879e6d9e203f497696986ad061a5c18e", "imei": "358490042584319", "_status": "submitted_via_web", "submit_date": "2012-01-15", "_submission_time": "2012-01-15T15:47:56", "submit_data": "2012-01-15", "_attachments": ["mberg/attachments/1326658785039.jpg", "mberg/attachments/1326658821173.jpg"], "amount": "20.0", "_id": 22705}, {"rating": "delectible", "gps": "-1.2834895 36.81660155 0.0 61.0", "location_name": "KP's", "description": "Beef stew and ugali ", "_status": "submitted_via_web", "submit_date": "2012-01-27", "_submission_time": "2012-01-28T07:28:58", "_uuid": "22200a65d83f4ef9986c2b34136ab769", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1327658854849.jpg"], "amount": "200.0", "_geolocation": [-1.2834895, 36.81660155], "comments": "Better with Pili Pili ", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "lunch", "_id": 23010, "submit_data": "2012-01-27", "food_photo": "1327658854849.jpg"}, {"rating": "epic_eat", "gps": "-1.2705402 36.8167218 0.0 75.0", "location_name": "Furusato", "description": "Sushi ", "_status": "submitted_via_web", "submit_date": "2012-01-28", "_submission_time": "2012-01-28T12:42:36", "_uuid": "281411919409465b92f0d00adc1704d0", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1327772438992.jpg"], "amount": "1600.0", "_geolocation": [-1.2705402, 36.8167218], "comments": "Freaking awesome ", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "dinner", "_id": 23013, "submit_data": "2012-01-28", "food_photo": "1327772438992.jpg"}, {"rating": "delectible", "description": "Pizza Biongiornio ", "_status": "submitted_via_web", "submit_date": "2012-03-25", "_submission_time": "2012-04-26T05:38:43", "_uuid": "74896779767b4fa38de3cb3ed399a039", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1332692558248.jpg"], "food_photo": "1332692558248.jpg", "amount": "12.0", "_geolocation": [49.26994343, -123.15297941], "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "morning_food", "_id": 45315, "submit_data": "2012-03-25", "gps": "49.26994343 -123.15297940999999 0.0 56.0"}, {"rating": "epic_eat", "location_name": "Saigon bakery ", "description": "Bang mi sandwich ", "_status": "submitted_via_web", "submit_date": "2012-04-07", "_submission_time": "2012-04-26T05:39:36", "_uuid": "3e568d9d4f0e47aa821cb81553128cca", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_geolocation": [40.719152293168, -73.9970292337239], "food_photo": "1333825651002.jpg", "imei": "358490042584319", "amount": "4.25", "_attachments": ["mberg/attachments/1333825651002.jpg"], "_xform_id_string": "good_eats", "food_type": "lunch", "_id": 45317, "submit_data": "2012-04-07", "gps": "40.71915229316801 -73.99702923372388 -9.899993896484375 10.0"}, {"rating": "epic_eat", "gps": "12.613462437875569 77.0583969913423 572.5 35.0", "location_name": "Addigas ", "description": "Idli radda ", "submit_date": "2012-04-19", "_submission_time": "2012-04-26T05:40:25", "_uuid": "7f2ad6f470c24027baa1781bccadead6", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "medium_risk", "_attachments": ["mberg/attachments/1334808099018.jpg", "mberg/attachments/1334809255176.jpg"], "location_photo": "1334809255176.jpg", "amount": "28.0", "_geolocation": [12.6134624378756, 77.0583969913423], "submit_data": "2012-04-19", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "morning_food", "_id": 45319, "_status": "submitted_via_web", "food_photo": "1334808099018.jpg"}, {"rating": "epic_eat", "gps": "45.527778600000005 -73.5752153 0.0 56.0", "location_name": "La Belle Soeur ", "description": "Lamb burger ", "_status": "submitted_via_web", "submit_date": "2012-04-27", "_submission_time": "2012-04-28T18:40:46", "_uuid": "1736b1b230cc491c9d14a3e2de175e85", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1335569110174.jpg"], "amount": "12.0", "_geolocation": [45.5277786, -73.5752153], "comments": "Comes with beer and fries ", "_xform_id_string": "good_eats", "imei": "358490042584319", "food_type": "dinner", "_id": 48497, "submit_data": "2012-04-27", "food_photo": "1335569110174.jpg"}, {"rating": "epic_eat", "location_name": "Distellery ", "description": "Pots ", "_status": "submitted_via_web", "submit_date": "2012-04-27", "_submission_time": "2012-04-28T18:41:26", "_uuid": "88afa14cfb314893a662b6b858693bd2", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_geolocation": [45.5277786, -73.5752153], "food_photo": "1335577418842.jpg", "imei": "358490042584319", "amount": "9.5", "_attachments": ["mberg/attachments/1335577418842.jpg"], "_xform_id_string": "good_eats", "food_type": "libations", "_id": 48498, "submit_data": "2012-04-27", "gps": "45.527778600000005 -73.5752153 0.0 56.0"}, {"rating": "delectible", "description": "Gado Gado (Bali) ", "food_type": "dinner", "food_photo": "1335664200735.jpg", "submit_date": "2012-04-28", "_submission_time": "2012-04-29T12:40:40", "_uuid": "07d46772ed3f457d9b178e3045ddba0d", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": ["mberg/attachments/1335664200735.jpg", "mberg/attachments/1335664243044.jpg"], "location_photo": "1335664243044.jpg", "amount": "12.0", "_geolocation": [45.5277397166667, -73.57525235], "_xform_id_string": "good_eats", "imei": "358490042584319", "_status": "submitted_via_web", "_id": 48509, "submit_data": "2012-04-28", "gps": "45.527739716666666 -73.57525235 0.0 51.0"}, {"rating": "epic_eat", "gps": "-0.1051 34.7566 0 0", "location_name": "Kisumu", "description": "Mongolia stir fries", "submit_date": "2012-09-16", "_submission_time": "2012-09-17T10:19:40", "_uuid": "e19982d9f7364f839380e71f12d2ac6f", "_bamboo_dataset_id": "", "_deleted_at": null, "risk_factor": "low_risk", "_attachments": [], "location_photo": "BAR", "amount": "1200", "_geolocation": [-0.1051, 34.7566], "submit_data": "2012-09-16", "_xform_id_string": "good_eats", "imei": "no property preload in Rapaide", "food_type": "dinner", "_id": 337411, "_status": "submitted_via_web", "formhub/uuid": "5ff518d94d1f4876b482f1947c080c8d"}],
    dataByFoodType: {caffeination: 1, deserts: 2, dinner: 5, drunk_food: 1, libations: 1, lunch: 7, morning_food: 2, streat_sweets: 2, street_meat: 1}
}