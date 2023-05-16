package com.codestates.seb_43_21_main_project.bidItem.mapper;

import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPatchDto;
import com.codestates.seb_43_21_main_project.bidItem.dto.BidItemPostDto;
import com.codestates.seb_43_21_main_project.bidItem.entity.BidItem;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-16T10:23:57+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class BidItemMapperImpl implements BidItemMapper {

    @Override
    public BidItem bidItemPostDtoToBidItem(BidItemPostDto bidItemPostDto) {
        if ( bidItemPostDto == null ) {
            return null;
        }

        BidItem bidItem = new BidItem();

        bidItem.setBidItemName( bidItemPostDto.getBidItemName() );
        bidItem.setBidItemContent( bidItemPostDto.getBidItemContent() );
        bidItem.setBidItemStatus( bidItemPostDto.getBidItemStatus() );

        return bidItem;
    }

    @Override
    public BidItem bidItemPatchDtoToBidItem(BidItemPatchDto bidItemPatchDto) {
        if ( bidItemPatchDto == null ) {
            return null;
        }

        BidItem bidItem = new BidItem();

        bidItem.setBidItemId( bidItemPatchDto.getBidItemId() );
        bidItem.setBidItemName( bidItemPatchDto.getBidItemName() );
        bidItem.setBidItemContent( bidItemPatchDto.getBidItemContent() );
        bidItem.setBidItemStatus( bidItemPatchDto.getBidItemStatus() );

        return bidItem;
    }
}
