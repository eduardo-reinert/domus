package com.eduardoreinert.domus.service;

import com.eduardoreinert.domus.enums.Months;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.util.HashMap;

@Service
public class CubService {

    public HashMap<Integer, String> getCubMapFromCurrentYear() {
        Document doc;
        HashMap<Integer, String> cubMap = new HashMap<>();
        try {
            doc = Jsoup.connect("https://www.sindusconchapeco.com.br/novo/cub.html")
                    .get();

            Element table = doc.selectFirst("table.tbllistacub");

            if (table != null) {
                Elements rows = table.select("tr:has(td:has(span:containsOwn(residencial)))");

                for (Element row : rows) {
                    Elements tds = row.select("td");
                    if (tds.size() >= 2) {
                        for (Months month : Months.values()) {
                            int monthId = month.getMonthNumber();
                            if (tds.get(0).text().contains(month.getMonthName())) {
                                cubMap.put(monthId, tds.get(1).text().replace(".", "").replace(",", "."));
                            }
                        }
                    }
                }
            }

            return cubMap;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
